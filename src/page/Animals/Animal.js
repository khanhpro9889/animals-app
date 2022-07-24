import { useEffect, useState } from "react";
import { Title, Wrapper, BackButton, Alert } from "./styles";
import AnimalItem from "../../components/AnimalItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchAnimals } from "../../store/animals/actions";
import { useSearchParams, useNavigate } from "react-router-dom";
import Pagination from "../../components/Pagination";
import { HOME_PATH, ANIMALS_PATH } from "../../constants/path";

const perPageInitial = 6;

const handlePagination = (list, currentPage, perPage = perPageInitial) => {
  return list.slice(
    perPage * (currentPage - 1),
    perPage * (currentPage - 1) + perPage
  );
};

export default function Animal() {
  const navigate = useNavigate();
  const [animalPagination, setAnimalPagination] = useState([]);
  const animals = useSelector(({ AnimalReducer }) => AnimalReducer.animals);
  const isLoadingAnimals = useSelector(
    ({ AnimalReducer }) => AnimalReducer.isLoadingAnimals
  );
  const dispatch = useDispatch();
  // eslint-disable-next-line
  const [pageParams, setPageParams] = useSearchParams();
  const [totalPage, setTotalPage] = useState(null);
  const [currentPage, setCurrentPage] = useState(null);

  //effect fetch all animals to store
  useEffect(() => {
    dispatch(fetchAnimals());
    // eslint-disable-next-line
  }, []);

  //effect waiting for animals fetch completely then do pagination
  useEffect(() => {
    if (!isLoadingAnimals) {
      //pagination first load
      const page = parseInt(pageParams.get("page")) || 1; //not have query page or query page NaN then page = 1
      const total = Math.ceil(animals.length / perPageInitial);

      setTotalPage(total);

      if (page > total) {
        setCurrentPage(total);
        navigate({
          pathname: ANIMALS_PATH,
          search: `?page=${total}`,
        });
        const afterPagination = handlePagination(animals, total);
        setAnimalPagination(afterPagination);
      } else if (page < 1) {
        setCurrentPage(1);
        navigate(ANIMALS_PATH);
        const afterPagination = handlePagination(animals, 1);
        setAnimalPagination(afterPagination);
      } else {
        setCurrentPage(page);
        const afterPagination = handlePagination(animals, page);
        setAnimalPagination(afterPagination);
      }
    }
    // eslint-disable-next-line
  }, [isLoadingAnimals]);

  //effect change page in pagination
  useEffect(() => {
    if (currentPage) {
      const afterPagination = handlePagination(animals, currentPage);
      setAnimalPagination(afterPagination);
    }
    // eslint-disable-next-line
  }, [currentPage]);

  const handleChangePage = (type) => {
    if (type === "prev") {
      setCurrentPage((currentPage) => currentPage - 1);
      return navigate({
        pathname: ANIMALS_PATH,
        search: `?page=${currentPage - 1}`,
      });
    }
    setCurrentPage((currentPage) => currentPage + 1);
    return navigate({
      pathname: ANIMALS_PATH,
      search: `?page=${currentPage + 1}`,
    });
  };

  return (
    <Wrapper>
      <Title>Animals</Title>
      <BackButton onClick={() => navigate(HOME_PATH, { replace: true })}>
        X
      </BackButton>
      {isLoadingAnimals ? (
        <Alert>Loading...</Alert>
      ) : animalPagination.length === 0 ? (
        <Alert>No animals anymore!!</Alert>
      ) : (
        animalPagination.map((item) => {
          return <AnimalItem key={item.id} animal={item} />;
        })
      )}
      {!isLoadingAnimals && totalPage > 1 && (
        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          onChangePage={handleChangePage}
        />
      )}
    </Wrapper>
  );
}

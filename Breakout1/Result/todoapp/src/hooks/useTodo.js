import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getAllToDos } from "../store/todo/actions";

function useToDo() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    setLoading(true);
    dispatch(getAllToDos()).then(() => {
      setLoading(false);
    });
  }, []);

  return { loading };
}
export default useToDo;

import { useEffect, useState } from "react";
import { useToDoContext } from "../context/TodoContext";

function useToDo() {
  const [loading, setLoading] = useState(false);
  const { getAllToDos } = useToDoContext();
  useEffect(() => {
    setLoading(true);
    getAllToDos().then(() => {
      setLoading(false);
    });
  }, []);

  return { loading };
}
export default useToDo;

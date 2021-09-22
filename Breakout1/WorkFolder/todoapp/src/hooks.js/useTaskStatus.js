import { useState, useEffect } from 'react';

function useTaskStatus(taskId) {
  const [taskStatus, setTaskStatus] = useState(null);

  useEffect(() => {
    setTimeout(()=>{
        setTaskStatus(Math.random());
    },1000)
  },[taskId]);

  return taskStatus;
}export default useTaskStatus
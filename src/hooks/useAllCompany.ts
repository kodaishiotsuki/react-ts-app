/* eslint-disable react-hooks/exhaustive-deps */
import { useMessage } from './useMessage';
import axios from 'axios';
import { useState, useCallback } from 'react';

import { User } from 'types/api/user';


export const useAllcompany = () => {
  const { showMessage } = useMessage();

  const [loading,setLoading] = useState<boolean>(false);
  const [company,setCompany] = useState<Array<User>>([]);

  const getCompany = useCallback(() => {
    setLoading(true);
    axios.get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) =>
        setCompany(res.data)
      )
      .catch(() => {
        showMessage({title:"データ取得に失敗しました",status:"error"})
      })
      .finally(() => {
        setLoading(false);
    })
  },[])
  return{getCompany,loading,company}
}
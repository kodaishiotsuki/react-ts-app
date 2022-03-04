import { useHistory } from 'react-router-dom';
import axios from "axios";
import { useCallback, useState } from 'react';

import { User } from "types/api/user";


export const useAuth = () => {
  const history = useHistory();

  const [loading,setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);

    //axios.get<user>➡︎取得するデータの型定義
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        //ホーム画面へ遷移
        history.push("/home");
      } else {
        alert("ユーザーが見つかりません")
      }
    }).catch(() => alert("ログインできません")).finally(() => {
      setLoading(false);
    })
  }, [history]);

  return { login, loading };
  }
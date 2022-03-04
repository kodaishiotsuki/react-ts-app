import { useHistory } from 'react-router-dom';
import axios from "axios";
import { useCallback, useState } from 'react';

import { User } from "types/api/user";
import { useMessage } from './useMessage';


export const useAuth = () => {
  const history = useHistory();
  //カスタムフック
  const { showMessage } = useMessage(); //useMessageのshowMessage

  const [loading,setLoading] = useState(false);

  const login = useCallback((id: string) => {
    setLoading(true);

    //axios.get<user>➡︎取得するデータの型定義
    axios.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`).then((res) => {
      if (res.data) {
        //メッセージ表示
        showMessage({ title: "Login successful", status: "success" });
        //ホーム画面へ遷移
        history.push("/home");
      } else {
        //メッセージ表示
        showMessage({ title: "Not find user", status: "error" });
      }
    })
      .catch(() =>
        //メッセージ表示
        showMessage({ title: "Login failure", status: "error" })
      )
      .finally(() => {
      setLoading(false);
    })
  }, [history,showMessage]);

  return { login, loading };
  }
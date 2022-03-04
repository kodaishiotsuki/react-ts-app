import { memo, VFC } from 'react'
import { Route, Switch } from 'react-router-dom'

import { Login } from 'components/pages/Login'
import { homeRoute } from './HomeRoutes'
import { Page404 } from 'components/pages/Page404'
import { HeaderLayout } from 'components/templete/HeaderLayout'

export const Router: VFC = memo(() => {
  return (
    <Switch>
      {/* ログイン画面 */}
      <Route exact path="/">
        <Login />
      </Route>

      {/* ホーム画面 */}
      <Route
        path="/home"
        render={({ match: { url } }) => (
          <Switch>
            {homeRoute.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {/* ヘッダー画面 */}
                <HeaderLayout>{route.children}</HeaderLayout>
              </Route>
            ))}
          </Switch>
        )}
      />

      {/* 404ページ */}
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  )
})

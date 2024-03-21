import { useState } from "react";
import ArticleList from "./components/ArticleList";
import Header from "./components/Header";
import Form from "./components/Form";

export default function App() {
  const [user, setUser] = useState();
  const hasUser = Boolean(user);
  return (
    <div className="h-screen">
      <Header user={user} />
      {hasUser && <ArticleList />}
      {hasUser || <Form onSubmit={setUser} />}
      <div className="mt-10"></div>
    </div>
  );
}

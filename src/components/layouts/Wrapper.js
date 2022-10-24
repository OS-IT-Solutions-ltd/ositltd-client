import { useEffect } from "react";
import Header from "../ui/Header";

const Wrapper = ({children, title}) => {

    useEffect(() => {
        document.title = title;
    }, [title])

  return <>
    <Header />
    {children}
  </>;
}

export default Wrapper;
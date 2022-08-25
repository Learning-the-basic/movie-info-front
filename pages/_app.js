import '../styles/app.scss';
import { RecoilRoot } from "recoil";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <RecoilRoot>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RecoilRoot>
    </>
  )
}

export default MyApp;
import Header from "../../components/Header.jsx";
import {Outlet} from "react-router-dom";
import Page from "../../components/Page.jsx";
import AfterHeroSection from "../../components/AfterHeroSection.jsx";

function RootLayout() {
    return (
        <div>
        <Page className="flex flex-col">
            <Header />
            <Outlet />
        </Page>
        <AfterHeroSection/>
        </div>
    )
}

export default RootLayout;
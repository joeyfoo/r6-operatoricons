import * as React from "react";
import Layout from "../layouts";
import IconGrid from "components/IconGrid";
import Info from "components/Info";
import ReactGA from "react-ga";
import { analytics } from "../../package.json";
import "./base.scss";

export default class IndexPage extends React.Component<any> {
    componentDidMount() {
        // init GA
        ReactGA.initialize(analytics.gaTrackingID, {
            debug: analytics.debug,
            titleCase: false
        });
        ReactGA.set({ anonymizeIp: analytics.anonymizeIp });
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
    render() {
        return (
            <Layout>
                <IconGrid />
                <Info />
            </Layout>
        );
    }
}

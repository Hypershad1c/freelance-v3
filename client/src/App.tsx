import { Route, Switch } from "wouter";
import { SiteLayout } from "./components/site";
import {
  AboutPage,
  ArticlePage,
  BlogPage,
  ContactPage,
  ExpertisePage,
  HomePage,
  InvestmentsPage,
  ResourcesPage,
  TrainingsPage,
} from "./pages/SitePages";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <SiteLayout>
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/a-propos" component={AboutPage} />
        <Route path="/expertise-conseil" component={ExpertisePage} />
        <Route path="/formations" component={TrainingsPage} />
        <Route path="/investissements" component={InvestmentsPage} />
        <Route path="/blog" component={BlogPage} />
        <Route path="/blog/le-trade-finance-2026" component={ArticlePage} />
        <Route path="/ressources" component={ResourcesPage} />
        <Route path="/contact" component={ContactPage} />
        <Route component={NotFound} />
      </Switch>
    </SiteLayout>
  );
}

export default function App() {
  return <Router />;
}

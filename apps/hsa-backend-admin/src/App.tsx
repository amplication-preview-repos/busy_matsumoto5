import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { PortfolioList } from "./portfolio/PortfolioList";
import { PortfolioCreate } from "./portfolio/PortfolioCreate";
import { PortfolioEdit } from "./portfolio/PortfolioEdit";
import { PortfolioShow } from "./portfolio/PortfolioShow";
import { CryptocurrencyList } from "./cryptocurrency/CryptocurrencyList";
import { CryptocurrencyCreate } from "./cryptocurrency/CryptocurrencyCreate";
import { CryptocurrencyEdit } from "./cryptocurrency/CryptocurrencyEdit";
import { CryptocurrencyShow } from "./cryptocurrency/CryptocurrencyShow";
import { HealthcareProviderList } from "./healthcareProvider/HealthcareProviderList";
import { HealthcareProviderCreate } from "./healthcareProvider/HealthcareProviderCreate";
import { HealthcareProviderEdit } from "./healthcareProvider/HealthcareProviderEdit";
import { HealthcareProviderShow } from "./healthcareProvider/HealthcareProviderShow";
import { ResearcherList } from "./researcher/ResearcherList";
import { ResearcherCreate } from "./researcher/ResearcherCreate";
import { ResearcherEdit } from "./researcher/ResearcherEdit";
import { ResearcherShow } from "./researcher/ResearcherShow";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { AdministratorList } from "./administrator/AdministratorList";
import { AdministratorCreate } from "./administrator/AdministratorCreate";
import { AdministratorEdit } from "./administrator/AdministratorEdit";
import { AdministratorShow } from "./administrator/AdministratorShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HSABackend"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Portfolio"
          list={PortfolioList}
          edit={PortfolioEdit}
          create={PortfolioCreate}
          show={PortfolioShow}
        />
        <Resource
          name="Cryptocurrency"
          list={CryptocurrencyList}
          edit={CryptocurrencyEdit}
          create={CryptocurrencyCreate}
          show={CryptocurrencyShow}
        />
        <Resource
          name="HealthcareProvider"
          list={HealthcareProviderList}
          edit={HealthcareProviderEdit}
          create={HealthcareProviderCreate}
          show={HealthcareProviderShow}
        />
        <Resource
          name="Researcher"
          list={ResearcherList}
          edit={ResearcherEdit}
          create={ResearcherCreate}
          show={ResearcherShow}
        />
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Administrator"
          list={AdministratorList}
          edit={AdministratorEdit}
          create={AdministratorCreate}
          show={AdministratorShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

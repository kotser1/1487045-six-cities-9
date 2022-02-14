import MainPage from '../main-page/main-page';

type AppProps = {
  offersCount: number;
  displayedOffersCount: number;
}

function App({offersCount, displayedOffersCount}: AppProps): JSX.Element {
  return (
    <MainPage offersCount={offersCount} displayedOffersCount={displayedOffersCount} />
  );
}

export default App;

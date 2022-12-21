import Card from './components/Card';
import Obj from './components/Obj';
function App() {
  return (
    <>

      {
        Obj.map((item, index) => {
          return (
          <Card src={item.src} title={item.title} key={index} />
          )
        })
      }
    </>
  );
}
export default App;

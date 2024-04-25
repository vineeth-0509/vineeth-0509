import './App.css'
import{RecoilRoot, useRecoilValue,useRecoilState} from "recoil"
import { jobsAtom, networkAtom,notificationsAtom,messagingAtom, totalNotificationsSelector } from './atoms.jsx'

function App() {

//if we want to use the recoilhook,any atm if you want to access it needs to be wrapped inside the recoilroot.
 // const [count, setCount] = useState(0)  we dont have to use the useState and put the 4 state variables and do the rendering,we have to use the recoil state management library.
// we have to define the 4 atoms think of being similar to the useState.
  return 

  <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  
}

function MainApp(){
//specifically you can only use the recoil hook inside in a component that is wrapped isnide recoilroot else it will  fail.
  const networkNotificationCount=useRecoilValue(networkAtom)
// the above same thing using the useState is: const [networkNotificationCount, setNetworkCount]= useState(102)


//2nd atom
const jobsAtomCount=useRecoilValue(jobsAtom);
const notificationstAtomCount=useRecoilValue(notificationsAtom)
//const [messagingAtomCount,setMessagingAtomCount]=useRecoilState(messagingAtom);
const messagingAtomCount=useRecoilValue(messagingAtom)
const totalNotificationCount=useRecoilValue(totalNotificationsSelector)
// const totalNotificationCount=useMemo(()=>{
//   return networkNotificationCount + jobsAtomCount +notificationstAtomCount+ messagingAtomCount;
// },[ networkNotificationCount,jobsAtomCount,notificationstAtomCount,messagingAtomCount])
// from the above useMemo acts decent but in the recoil we have selectors which pretty much do the better the same thing
return (
    //now need to take this consideration and take them from there and render here using the recoil hooks like useRecoilState, useRecoilvalue,useSetRecoilState.
    <>

      <button>Home</button>
      <button>My Network ({networkNotificationCount >= 100 ? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging {messagingAtomCount}</button>
      <button>Notifications ({notificationstAtomCount})</button>
      {/* <buttonUpadter/> */}
    {/* <button onClick={()=>{
        messagingAtomCount(messagingAtomCount+1);
      }}>Me </button> */}

      <button>Me({totalNotificationCount})</button>
   
    </>
  )
}

// function ButtonUpdater(){
//   const setMessagingAtomCount = useSetRecoilState(messagingAtom);
//   return <button onClick={()=>{
//     setMessagingAtomCount(c=>c+1);
//   }}>Me </button>
// }

export default App




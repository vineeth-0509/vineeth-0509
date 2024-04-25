import {atom,selector} from "recoil";


export const networkAtom= atom({
    //it takes input as 2 things,1 a key to unique;y identify this atom and a deafult value.
    key:"networkAtom",
    default: 102
});
export const jobsAtom= atom({
    //it takes input as 2 things,1 a key to unique;y identify this atom and a deafult value.
    key:"jobsAtom",
    default: 0
});
export const notificationsAtom = atom({
    
    key:"notificationsAtom",
    default: 12
});
export const messagingAtom= atom({
    
    key:"messagingAtom",
    default: 0
});

// a selector is something that can be derieved from other atoms and even other selectors.
//lets create a new selector not an atom
//if we use the get inside the selector,recoil understands selector depends on the  dependencies of the selector.
// export const totalNotificationsSelector =selector({
//     key:"totalNotificationsSelector",
//     value:({get})=>{
//         const networkAtomCount=get(networkAtom);
//         const jobsAtomCount =get(jobsAtom);
//         const notificationsAtomCount=get(notificationsAtom);
//         const messagingAtomCount =get(messagingAtom);
//         return  networkAtomCount+jobsAtomCount+notificationsAtomCount + messagingAtomCount ;
//     }
// });
export const totalNotificationsSelector = selector({
    key: "totalNotificationsSelector",
    get: ({ get }) => {
        const networkAtomCount = get(networkAtom);
        const jobsAtomCount = get(jobsAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount = get(messagingAtom);
        return networkAtomCount + jobsAtomCount + notificationsAtomCount + messagingAtomCount;
    }
});

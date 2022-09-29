import app from "./app.js";
import { getFirestore, collection, addDoc, getDocs } from 'https://www.gstatic.com/firebasejs/9.9.3/firebase-firestore.js'

export async function subscribeToHellfireClub(subscription) {
    const db = getFirestore(app);
    const hellfireClubCollection = collection(db, 'hellfire-clube')
    const docRet =  await addDoc(hellfireClubCollection, subscription)
    return docRet.id
}

export 

async function getHellfireclubSubscriptions() {
    const db = getFirestore(app);
    const hellfireClubCollection = collection(db, 'hellfire-clube');
    const HellfireSnapshot = await getDocs(hellfireClubCollection)
    const HellfireSubscriptions = HellfireSnapshot.docs.map(doc => doc.data());
    return HellfireSubscriptions;
}
const getFromLocalStorage = () => {
    const appointment = localStorage.getItem('doc');
    if (appointment) return JSON.parse(appointment);
    else return [];
}


const addToLocalStorage = (doct) => {
    const doctor = getFromLocalStorage();
    const exist = doctor.find(i => i.id == doct.id);
    if(exist)
    {
        alert("already appointed");
    }
    else{
        doctor.push(doct);
        localStorage.setItem('doc',JSON.stringify(doctor))
    }
    
}
export { addToLocalStorage as addToAppointment,getFromLocalStorage as getAppointmentList }
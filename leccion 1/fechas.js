// new Date(año_num,mes_num,dia_num,[hor_num,min_num,seg_num,mils_num])

const horaInicio =new Date("July 23, 2021 11:02:00");

const horaFinal =new Date("September 24, 2021 11:02:00");

const horaUso=horaInicio.getDate() - horaFinal.getDate()
console.log(horaUso);

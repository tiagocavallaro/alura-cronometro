export function timetoseconds(time:string) {
  const[hours ='0', minutes ='0', seconds ='0'] = time.split(":");
  const secondstohours = Number(hours) * 3600;
  const minutestoseconds = Number(minutes) * 60;
  return secondstohours + minutestoseconds + Number(seconds);
}
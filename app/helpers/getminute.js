import { helper } from '@ember/component/helper';

export default helper(function getminute([mills]/*, hash*/) {
  let minutes = Math.floor((mills / 60000));
  let seconds = ((mills % 60000) / 1000).toFixed(0)
  return (((minutes < 10) ? ("0" + minutes) : minutes) + " : " + ((seconds < 10) ? ("0" + seconds) : seconds));
});

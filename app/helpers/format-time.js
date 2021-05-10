import { helper } from '@ember/component/helper';

export default helper(function formatTime([time]/*, hash*/) {
  return time < 10 ? ("0" + time) : time;
});

import Moment from 'moment';

function FormatDate(dt) {
      // Format date as MM/DD/YYYY
      return Moment(dt).format('L');
    
  };

  export default FormatDate;
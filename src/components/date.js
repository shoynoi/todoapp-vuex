import moment from "moment";

export default {
  methods: {
    today() {
      return moment().format('YYYY-MM-DD')
    }
  },
  filters: {
    formatDeadline(val) {
      const date = moment(val);
      if (val === '') {
        return 'なし'
      } else if (date.year() === moment().year()) {
        return date.format('M月D日')
      } else {
        return date.format('YYYY年M月D日')
      }
    }
  },
}

import moment from 'moment';

export default function (date) {
	const stringDate = moment().format('dddd D');
	return stringDate.split(' ');
}

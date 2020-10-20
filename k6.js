import http from 'k6/http'
import { sleep } from 'k6'

export let options = {
  stages: [
    { duration: '1s', target: 200 }, // below normal load
    // { duration: '1m', target: 100 },
    // { duration: '10s', target: 1400 }, // spike to 1400 users
    // { duration: '3m', target: 1400 }, // stay at 1400 for 3 minutes
    // { duration: '10s', target: 100 }, // scale down. Recovery stage.
    // { duration: '3m', target: 100 },
    // { duration: '10s', target: 0 },
  ],
};
export default function (){
	http.get('http://192.168.92.63:7000')
	sleep(1)
}
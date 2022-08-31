// import {publicIp, publicIpv4, publicIpv6} from 'public-ip';

// import { stuff } from 'some_module'
// var stuff = require('some_module')
import { publicIp, publicIpv4, publicIpv6 } from 'public-ip';

function App() {
    return (
        console.log(await publicIpv4())
        );
}


export default {App};



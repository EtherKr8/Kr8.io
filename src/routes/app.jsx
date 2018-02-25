import WhatIsKr8 from '../views/Content/WhatIsKr8';
import UseCases from '../views/Content/UseCases';
import ConsumingLogs from '../views/Content/ConsumingLogs.jsx';
import ComingSoon from '../views/Content/ComingSoon';

const appRoutes = [
    { path: "/whatiskr8", name: "What is Kr8.io", icon: "pe-7s-light", component: WhatIsKr8 },
    { path: "/usecases", name: "On-Chain Storage", icon: "pe-7s-server", component: UseCases },
    { path: "/actionableevents", name: "Actionable Events", icon: "pe-7s-share", component: ConsumingLogs },
    { path: "/comingsoon", name: "Coming Soon", icon: "pe-7s-clock", component: ComingSoon },
    { redirect: true, path:"/", to:"/whatiskr8", name: "What Is Kr8?" }
];

export default appRoutes;

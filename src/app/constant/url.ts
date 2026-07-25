
    // export const API_URL_RL='http://localhost:9091';
    // export const API_URL_ORDER='http://localhost:9095';
    // export const API_URL_FC='http://localhost:9094';
    // export const API_URL_UD='http://localhost:9092';

    

    export const k8ExternalEndpoint='http://k8s-default-awsingre-9aa4c55379-1122414131.eu-west-2.elb.amazonaws.com';
    
    export const API_URL_RL=k8ExternalEndpoint;
    export const API_URL_ORDER=k8ExternalEndpoint;
    export const API_URL_FC=k8ExternalEndpoint;
    export const API_URL_UD=k8ExternalEndpoint;
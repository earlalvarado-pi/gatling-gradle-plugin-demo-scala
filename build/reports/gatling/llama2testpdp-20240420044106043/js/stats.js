var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "2517",
        "ko": "7483"
    },
    "minResponseTime": {
        "total": "877",
        "ok": "877",
        "ko": "658562"
    },
    "maxResponseTime": {
        "total": "960022",
        "ok": "959920",
        "ko": "960022"
    },
    "meanResponseTime": {
        "total": "810810",
        "ok": "471094",
        "ko": "925078"
    },
    "standardDeviation": {
        "total": "252236",
        "ok": "273505",
        "ko": "89366"
    },
    "percentiles1": {
        "total": "960000",
        "ok": "468773",
        "ko": "960000"
    },
    "percentiles2": {
        "total": "960000",
        "ok": "701996",
        "ko": "960000"
    },
    "percentiles3": {
        "total": "960001",
        "ok": "906909",
        "ko": "960001"
    },
    "percentiles4": {
        "total": "960001",
        "ok": "949525",
        "ko": "960001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2516,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 7483,
    "percentage": 75
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.434",
        "ok": "2.375",
        "ko": "7.059"
    }
},
contents: {
"req_postrequest--996301393": {
        type: "REQUEST",
        name: "PostRequest",
path: "PostRequest",
pathFormatted: "req_postrequest--996301393",
stats: {
    "name": "PostRequest",
    "numberOfRequests": {
        "total": "10000",
        "ok": "2517",
        "ko": "7483"
    },
    "minResponseTime": {
        "total": "877",
        "ok": "877",
        "ko": "658562"
    },
    "maxResponseTime": {
        "total": "960022",
        "ok": "959920",
        "ko": "960022"
    },
    "meanResponseTime": {
        "total": "810810",
        "ok": "471094",
        "ko": "925078"
    },
    "standardDeviation": {
        "total": "252236",
        "ok": "273505",
        "ko": "89366"
    },
    "percentiles1": {
        "total": "960000",
        "ok": "468921",
        "ko": "960000"
    },
    "percentiles2": {
        "total": "960000",
        "ok": "702063",
        "ko": "960000"
    },
    "percentiles3": {
        "total": "960001",
        "ok": "906909",
        "ko": "960001"
    },
    "percentiles4": {
        "total": "960001",
        "ok": "949525",
        "ko": "960001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 0,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 1,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2516,
    "percentage": 25
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 7483,
    "percentage": 75
},
    "meanNumberOfRequestsPerSecond": {
        "total": "9.434",
        "ok": "2.375",
        "ko": "7.059"
    }
}
    }
}

}

function fillStats(stat){
    $("#numberOfRequests").append(stat.numberOfRequests.total);
    $("#numberOfRequestsOK").append(stat.numberOfRequests.ok);
    $("#numberOfRequestsKO").append(stat.numberOfRequests.ko);

    $("#minResponseTime").append(stat.minResponseTime.total);
    $("#minResponseTimeOK").append(stat.minResponseTime.ok);
    $("#minResponseTimeKO").append(stat.minResponseTime.ko);

    $("#maxResponseTime").append(stat.maxResponseTime.total);
    $("#maxResponseTimeOK").append(stat.maxResponseTime.ok);
    $("#maxResponseTimeKO").append(stat.maxResponseTime.ko);

    $("#meanResponseTime").append(stat.meanResponseTime.total);
    $("#meanResponseTimeOK").append(stat.meanResponseTime.ok);
    $("#meanResponseTimeKO").append(stat.meanResponseTime.ko);

    $("#standardDeviation").append(stat.standardDeviation.total);
    $("#standardDeviationOK").append(stat.standardDeviation.ok);
    $("#standardDeviationKO").append(stat.standardDeviation.ko);

    $("#percentiles1").append(stat.percentiles1.total);
    $("#percentiles1OK").append(stat.percentiles1.ok);
    $("#percentiles1KO").append(stat.percentiles1.ko);

    $("#percentiles2").append(stat.percentiles2.total);
    $("#percentiles2OK").append(stat.percentiles2.ok);
    $("#percentiles2KO").append(stat.percentiles2.ko);

    $("#percentiles3").append(stat.percentiles3.total);
    $("#percentiles3OK").append(stat.percentiles3.ok);
    $("#percentiles3KO").append(stat.percentiles3.ko);

    $("#percentiles4").append(stat.percentiles4.total);
    $("#percentiles4OK").append(stat.percentiles4.ok);
    $("#percentiles4KO").append(stat.percentiles4.ko);

    $("#meanNumberOfRequestsPerSecond").append(stat.meanNumberOfRequestsPerSecond.total);
    $("#meanNumberOfRequestsPerSecondOK").append(stat.meanNumberOfRequestsPerSecond.ok);
    $("#meanNumberOfRequestsPerSecondKO").append(stat.meanNumberOfRequestsPerSecond.ko);
}

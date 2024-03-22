var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "499",
        "ko": "9501"
    },
    "minResponseTime": {
        "total": "177",
        "ok": "177",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60170",
        "ok": "59996",
        "ko": "60170"
    },
    "meanResponseTime": {
        "total": "58440",
        "ok": "28732",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "7985",
        "ok": "18674",
        "ko": "4"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "27474",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "46548",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "57956",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59641",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 9,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 486,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 9501,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "62.5",
        "ok": "3.119",
        "ko": "59.381"
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
        "ok": "499",
        "ko": "9501"
    },
    "minResponseTime": {
        "total": "177",
        "ok": "177",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60170",
        "ok": "59996",
        "ko": "60170"
    },
    "meanResponseTime": {
        "total": "58440",
        "ok": "28732",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "7985",
        "ok": "18674",
        "ko": "4"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "27474",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "46548",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "57956",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59641",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 9,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 4,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 486,
    "percentage": 5
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 9501,
    "percentage": 95
},
    "meanNumberOfRequestsPerSecond": {
        "total": "62.5",
        "ok": "3.119",
        "ko": "59.381"
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
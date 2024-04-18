var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "5000",
        "ok": "499",
        "ko": "4501"
    },
    "minResponseTime": {
        "total": "11850",
        "ok": "11850",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60026",
        "ok": "59756",
        "ko": "60026"
    },
    "meanResponseTime": {
        "total": "57748",
        "ok": "37430",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "7861",
        "ok": "12671",
        "ko": "1"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "39148",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "47235",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "57670",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59487",
        "ko": "60001"
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
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 499,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 4501,
    "percentage": 90
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.25",
        "ok": "3.119",
        "ko": "28.131"
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
        "total": "5000",
        "ok": "499",
        "ko": "4501"
    },
    "minResponseTime": {
        "total": "11850",
        "ok": "11850",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60026",
        "ok": "59756",
        "ko": "60026"
    },
    "meanResponseTime": {
        "total": "57748",
        "ok": "37430",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "7861",
        "ok": "12671",
        "ko": "1"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "39148",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "47235",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "57670",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59487",
        "ko": "60001"
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
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 499,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 4501,
    "percentage": 90
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.25",
        "ok": "3.119",
        "ko": "28.131"
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

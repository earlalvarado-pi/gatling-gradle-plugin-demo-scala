var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "1589",
        "ko": "8411"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "2902",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "21217",
        "ok": "21217",
        "ko": "39"
    },
    "meanResponseTime": {
        "total": "2756",
        "ok": "17300",
        "ko": "9"
    },
    "standardDeviation": {
        "total": "6465",
        "ok": "3401",
        "ko": "2"
    },
    "percentiles1": {
        "total": "9",
        "ok": "18401",
        "ko": "9"
    },
    "percentiles2": {
        "total": "11",
        "ok": "18578",
        "ko": "10"
    },
    "percentiles3": {
        "total": "18487",
        "ok": "19466",
        "ko": "11"
    },
    "percentiles4": {
        "total": "19446",
        "ok": "20244",
        "ko": "14"
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
    "count": 1589,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 8411,
    "percentage": 84
},
    "meanNumberOfRequestsPerSecond": {
        "total": "84.746",
        "ok": "13.466",
        "ko": "71.28"
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
        "ok": "1589",
        "ko": "8411"
    },
    "minResponseTime": {
        "total": "5",
        "ok": "2902",
        "ko": "5"
    },
    "maxResponseTime": {
        "total": "21217",
        "ok": "21217",
        "ko": "39"
    },
    "meanResponseTime": {
        "total": "2756",
        "ok": "17300",
        "ko": "9"
    },
    "standardDeviation": {
        "total": "6465",
        "ok": "3401",
        "ko": "2"
    },
    "percentiles1": {
        "total": "9",
        "ok": "18401",
        "ko": "9"
    },
    "percentiles2": {
        "total": "11",
        "ok": "18578",
        "ko": "10"
    },
    "percentiles3": {
        "total": "18487",
        "ok": "19466",
        "ko": "11"
    },
    "percentiles4": {
        "total": "19446",
        "ok": "20244",
        "ko": "14"
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
    "count": 1589,
    "percentage": 16
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 8411,
    "percentage": 84
},
    "meanNumberOfRequestsPerSecond": {
        "total": "84.746",
        "ok": "13.466",
        "ko": "71.28"
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

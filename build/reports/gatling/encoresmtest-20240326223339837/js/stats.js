var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10",
        "ok": "7",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "20",
        "ok": "26",
        "ko": "20"
    },
    "maxResponseTime": {
        "total": "10002",
        "ok": "7217",
        "ko": "10002"
    },
    "meanResponseTime": {
        "total": "2467",
        "ok": "1054",
        "ko": "5764"
    },
    "standardDeviation": {
        "total": "3796",
        "ok": "2516",
        "ko": "4212"
    },
    "percentiles1": {
        "total": "27",
        "ok": "27",
        "ko": "7269"
    },
    "percentiles2": {
        "total": "5421",
        "ok": "29",
        "ko": "8636"
    },
    "percentiles3": {
        "total": "8772",
        "ok": "5061",
        "ko": "9729"
    },
    "percentiles4": {
        "total": "9756",
        "ok": "6786",
        "ko": "9947"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 6,
    "percentage": 60
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
    "count": 1,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.111",
        "ok": "0.078",
        "ko": "0.033"
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
        "total": "10",
        "ok": "7",
        "ko": "3"
    },
    "minResponseTime": {
        "total": "20",
        "ok": "26",
        "ko": "20"
    },
    "maxResponseTime": {
        "total": "10002",
        "ok": "7217",
        "ko": "10002"
    },
    "meanResponseTime": {
        "total": "2467",
        "ok": "1054",
        "ko": "5764"
    },
    "standardDeviation": {
        "total": "3796",
        "ok": "2516",
        "ko": "4212"
    },
    "percentiles1": {
        "total": "27",
        "ok": "27",
        "ko": "7269"
    },
    "percentiles2": {
        "total": "5421",
        "ok": "29",
        "ko": "8636"
    },
    "percentiles3": {
        "total": "8772",
        "ok": "5061",
        "ko": "9729"
    },
    "percentiles4": {
        "total": "9756",
        "ok": "6786",
        "ko": "9947"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 6,
    "percentage": 60
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
    "count": 1,
    "percentage": 10
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3,
    "percentage": 30
},
    "meanNumberOfRequestsPerSecond": {
        "total": "0.111",
        "ok": "0.078",
        "ko": "0.033"
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

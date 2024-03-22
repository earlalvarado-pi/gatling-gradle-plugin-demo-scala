var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "5000",
        "ok": "1312",
        "ko": "3688"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "30192"
    },
    "maxResponseTime": {
        "total": "60023",
        "ok": "59979",
        "ko": "60023"
    },
    "meanResponseTime": {
        "total": "50975",
        "ok": "28090",
        "ko": "59116"
    },
    "standardDeviation": {
        "total": "16870",
        "ok": "17576",
        "ko": "4831"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "26283",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "42629",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "57097",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59559",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 20,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 12,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1280,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3688,
    "percentage": 74
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.25",
        "ok": "8.2",
        "ko": "23.05"
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
        "ok": "1312",
        "ko": "3688"
    },
    "minResponseTime": {
        "total": "102",
        "ok": "102",
        "ko": "30192"
    },
    "maxResponseTime": {
        "total": "60023",
        "ok": "59979",
        "ko": "60023"
    },
    "meanResponseTime": {
        "total": "50975",
        "ok": "28090",
        "ko": "59116"
    },
    "standardDeviation": {
        "total": "16870",
        "ok": "17576",
        "ko": "4831"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "26283",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "42629",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "57097",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59559",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 20,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 12,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1280,
    "percentage": 26
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 3688,
    "percentage": 74
},
    "meanNumberOfRequestsPerSecond": {
        "total": "31.25",
        "ok": "8.2",
        "ko": "23.05"
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

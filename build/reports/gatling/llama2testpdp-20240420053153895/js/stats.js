var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "15000",
        "ok": "2204",
        "ko": "12796"
    },
    "minResponseTime": {
        "total": "1825",
        "ok": "1825",
        "ko": "446424"
    },
    "maxResponseTime": {
        "total": "960007",
        "ok": "958931",
        "ko": "960007"
    },
    "meanResponseTime": {
        "total": "701496",
        "ok": "423826",
        "ko": "749322"
    },
    "standardDeviation": {
        "total": "222778",
        "ok": "255095",
        "ko": "177208"
    },
    "percentiles1": {
        "total": "648116",
        "ok": "414411",
        "ko": "656663"
    },
    "percentiles2": {
        "total": "960000",
        "ok": "612906",
        "ko": "960000"
    },
    "percentiles3": {
        "total": "960000",
        "ok": "879775",
        "ko": "960000"
    },
    "percentiles4": {
        "total": "960001",
        "ok": "943845",
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
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2204,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 12796,
    "percentage": 85
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.151",
        "ok": "2.079",
        "ko": "12.072"
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
        "total": "15000",
        "ok": "2204",
        "ko": "12796"
    },
    "minResponseTime": {
        "total": "1825",
        "ok": "1825",
        "ko": "446424"
    },
    "maxResponseTime": {
        "total": "960007",
        "ok": "958931",
        "ko": "960007"
    },
    "meanResponseTime": {
        "total": "701496",
        "ok": "423826",
        "ko": "749322"
    },
    "standardDeviation": {
        "total": "222778",
        "ok": "255095",
        "ko": "177208"
    },
    "percentiles1": {
        "total": "648117",
        "ok": "414423",
        "ko": "656663"
    },
    "percentiles2": {
        "total": "960000",
        "ok": "613243",
        "ko": "960000"
    },
    "percentiles3": {
        "total": "960000",
        "ok": "879775",
        "ko": "960000"
    },
    "percentiles4": {
        "total": "960001",
        "ok": "943845",
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
    "count": 0,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 2204,
    "percentage": 15
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 12796,
    "percentage": 85
},
    "meanNumberOfRequestsPerSecond": {
        "total": "14.151",
        "ok": "2.079",
        "ko": "12.072"
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

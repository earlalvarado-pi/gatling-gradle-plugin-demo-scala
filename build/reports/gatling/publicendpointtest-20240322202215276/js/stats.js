var stats = {
    type: "GROUP",
name: "All Requests",
path: "",
pathFormatted: "group_missing-name--1146707516",
stats: {
    "name": "All Requests",
    "numberOfRequests": {
        "total": "10000",
        "ok": "1201",
        "ko": "8799"
    },
    "minResponseTime": {
        "total": "113",
        "ok": "113",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60153",
        "ok": "59984",
        "ko": "60153"
    },
    "meanResponseTime": {
        "total": "56455",
        "ok": "30481",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "11367",
        "ok": "17582",
        "ko": "2"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "30849",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "46041",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "57507",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59447",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 15,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1181,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 8799,
    "percentage": 88
},
    "meanNumberOfRequestsPerSecond": {
        "total": "62.5",
        "ok": "7.506",
        "ko": "54.994"
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
        "ok": "1201",
        "ko": "8799"
    },
    "minResponseTime": {
        "total": "113",
        "ok": "113",
        "ko": "60000"
    },
    "maxResponseTime": {
        "total": "60153",
        "ok": "59984",
        "ko": "60153"
    },
    "meanResponseTime": {
        "total": "56455",
        "ok": "30481",
        "ko": "60000"
    },
    "standardDeviation": {
        "total": "11367",
        "ok": "17582",
        "ko": "2"
    },
    "percentiles1": {
        "total": "60000",
        "ok": "30849",
        "ko": "60000"
    },
    "percentiles2": {
        "total": "60000",
        "ok": "46041",
        "ko": "60000"
    },
    "percentiles3": {
        "total": "60001",
        "ok": "57507",
        "ko": "60001"
    },
    "percentiles4": {
        "total": "60001",
        "ok": "59447",
        "ko": "60001"
    },
    "group1": {
    "name": "t < 800 ms",
    "htmlName": "t < 800 ms",
    "count": 15,
    "percentage": 0
},
    "group2": {
    "name": "800 ms <= t < 1200 ms",
    "htmlName": "t >= 800 ms <br> t < 1200 ms",
    "count": 5,
    "percentage": 0
},
    "group3": {
    "name": "t >= 1200 ms",
    "htmlName": "t >= 1200 ms",
    "count": 1181,
    "percentage": 12
},
    "group4": {
    "name": "failed",
    "htmlName": "failed",
    "count": 8799,
    "percentage": 88
},
    "meanNumberOfRequestsPerSecond": {
        "total": "62.5",
        "ok": "7.506",
        "ko": "54.994"
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

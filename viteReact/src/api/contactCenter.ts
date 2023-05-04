import { DELETE_JOBS_DETAIL, DELETE_JOBS_DETAIL_CALLPOINT, GET_JOBS, GET_JOBS_DETAIL, GET_JOBS_DETAIL_CALLPOINT, GET_JOBS_DETAIL_CALLRESULT, POST_JOBS, POST_JOBS_DETAIL_CALLPOINT, PUT_JOBS_DETAIL } from "../mock/contactData"
import { PageObjType } from "../types"

export const getJobs = async (serviceId: string, pageObj: PageObjType) => {
  // if (import.meta.env.DEV) {
  //   return GET_JOBS
  // }

  const response = await fetch(`/api/v1/services/${serviceId}/jobs?pageNo=${pageObj.pageNo}&pageSize=${pageObj.pageSize}`)
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패하였습니다.')
  }
  return response.json()
}
export const postJobs = async (serviceId: string, options: any) => {
  // if (import.meta.env.DEV) {
  //   return POST_JOBS
  // }

  const bodyData = {
    "useRequestRateLimit": false,
    "tts": {
      "ttsOnError": "에러가 발생하여 통화를 종료합니다"
    },
    "shuffle": true,
    "scenarioType": "string",
    "record": true,
    "minTargetOutboundIntervalSec": "300",
    "callbacks": {
      "forwards": [
        "http://localhost:8083/dlp"
      ],
      "external": {
        "postcall": "https://external.somewhere.com/postcall",
        "inquiry": "https://external.somewhere.com/inquiry",
        "precall": options.preCall,
        "complete": options.complete,
      }
    },
    "mode": "NON_STRICT",
    "name": options.name,
    "jobType": options.jobType,
    "channels": Number(options.channelCount),
    "callType": options.callType,
  }
  const response = await fetch(`/api/v1/services/${serviceId}/jobs`, { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "key"
    },
    body: JSON.stringify(bodyData)
  })
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패하였습니다.')
  }
  return response.json()
}
export const putJobs = async (serviceId: string, jobId: string, options: any) => {
  // if (import.meta.env.DEV) {
  //   return PUT_JOBS_DETAIL
  // }
  const bodyData = {
    "useRequestRateLimit": false,
    "tts": {
      "ttsOnError": "에러가 발생하여 통화를 종료합니다"
    },
    "shuffle": true,
    "scenarioType": "string",
    "record": true,
    "minTargetOutboundIntervalSec": "300",
    "callbacks": {
      "forwards": [
        "http://localhost:8083/dlp"
      ],
      "external": {
        "postcall": "https://external.somewhere.com/postcall",
        "inquiry": "https://external.somewhere.com/inquiry",
        "precall": options.preCall,
        "complete": options.complete,
      }
    },
    "mode": "NON_STRICT",
    "name": options.name,
    "jobType": options.jobType,
    "channels": Number(options.channelCount),
    "callType": options.callType,
  }
  const response = await fetch(`/api/v1/services/${serviceId}/jobs/${jobId}`, { 
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "key"
    },
    body: JSON.stringify(bodyData)
  })
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패하였습니다.')
  }
  return response.json()
}
export const deleteJobs = async (serviceId: string, jobId: string) => {
  // if (import.meta.env.DEV) {
  //   return DELETE_JOBS_DETAIL
  // }

  const response = await fetch(`/api/v1/services/${serviceId}/jobs/${jobId}`, { 
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "key"
    }
  })
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패하였습니다.')
  }
  return response.json()
}
export const patchJobs = async (serviceId: string, jobId: string, options: any) => {
  const bodyData = {
    active: options.active
  }
  const response = await fetch(`/api/v1/services/${serviceId}/jobs/${jobId}`, { 
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "key"
    },
    body: JSON.stringify(bodyData)
  })
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패하였습니다.')
  }
  return response.json()
}

export const getJobsDetail = async (serviceId: string, jobId: string) => {
  if (import.meta.env.DEV) {
    return GET_JOBS_DETAIL
  }

  const response = await fetch(`/api/v1/services/${serviceId}/jobs/${jobId}`)
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패하였습니다.')
  }
  return response.json()
}

export const getJobCallPoints = async (serviceId: string, jobId: string) => {
  // if (import.meta.env.DEV) {
  //   return GET_JOBS_DETAIL_CALLPOINT
  // }

  const response = await fetch(`/api/v1/services/${serviceId}/jobs/${jobId}/callpoints?pageNo=0&pageSize=100`)
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패하였습니다.')
  }
  return response.json()
}

export const postCallPoint = async (serviceId: string, jobId: string, options: any) => {
  // if (import.meta.env.DEV) {
  //   return POST_JOBS_DETAIL_CALLPOINT
  // }

  const response = await fetch(`/api/v1/services/${serviceId}/jobs/${jobId}/callpoints`, { 
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "key"
    },
    body: JSON.stringify(options)
  })
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패하였습니다.')
  }
  return response.json()
}

export const deleteCallPoint = async (serviceId: string, jobId: string, mdn: string) => {
  // if (import.meta.env.DEV) {
  //   return DELETE_JOBS_DETAIL_CALLPOINT
  // }

  const response = await fetch(`/api/v1/services/${serviceId}/jobs/${jobId}/callpoints/${mdn}`, { 
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "key"
    }
  })
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패하였습니다.')
  }
  return response.status
}

export const getJobResults = async (serviceId: string, jobId: string, pageObj: PageObjType) => {
  if (import.meta.env.DEV) {
    return GET_JOBS_DETAIL_CALLRESULT
  }

  const response = await fetch(`/api/v1/services/${serviceId}/jobs/${jobId}/results?fromDate=2023-01-01&toDate=2024-01-01&pageNo=${pageObj.pageNo}&pageSize=${pageObj.pageSize}`)
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패하였습니다.')
  }
  return response.json()
}
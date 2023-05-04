import { GET_TRANSACTIONS, GET_TRANSACTIONS_DETAIL, GET_TRANSACTIONS_DETAIL_STATS, GET_TRANSACTIONS_DETAIL_TARGETS } from "../mock/transactions";
import { PageObjType } from "../types";

export const getTransactions = async ({ serviceId, jobId, pageObj }: { serviceId: string; jobId: string; pageObj: PageObjType; }) => {
  // if (import.meta.env.DEV) {
  //   return GET_TRANSACTIONS
  // }
  const response = await fetch(`/api/v1/services/${serviceId}/jobs/${jobId}/transactions?pageNo=${pageObj.pageNo}&pageSize=${pageObj.pageSize}`)
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패하였습니다.')
  }
  return response.json()
}
export const postTransactions = async (serviceId: string, jobId: string, options: any) => {
  const bodyData = {
    "active": true,
    "billingMdn": "+820200100020003",
    "caller": options.callMdn,
    "displayName": options.lettering,
    "name": options.transactionsName,
    "priority": 0,
    "tags": [],
    "targets": options.targetList
  }
  const response = await fetch(`/api/v1/services/${serviceId}/jobs/${jobId}/transactions`, { 
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

export const getTransactionsDetail = async ({ serviceId, jobId, transactionId, pageObj }: { serviceId: string; jobId: string; transactionId: string; pageObj: PageObjType;}) => {
  // if (import.meta.env.DEV) {
  //   return GET_TRANSACTIONS_DETAIL
  // }
  const response = await fetch(`/api/v1/services/${serviceId}/jobs/${jobId}/transactions/${transactionId}?pageNo=${pageObj.pageNo}&pageSize=${pageObj.pageSize}`)
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패하였습니다.')
  }
  return response.json()
}
export const getTransactionsDetailTargets = async ({ serviceId, jobId, transactionId, pageObj }: { serviceId: string; jobId: string; transactionId: string; pageObj: PageObjType;}) => {
  // if (import.meta.env.DEV) {
  //   return GET_TRANSACTIONS_DETAIL_TARGETS
  // }

  const response = await fetch(`/api/v1/services/${serviceId}/jobs/${jobId}/transactions/${transactionId}/targets?fromDate=2023-01-01&toDate=2024-01-01&pageNo=${pageObj.pageNo}&pageSize=${pageObj.pageSize}`)
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패하였습니다.')
  }
  return response.json()
}
export const getTransactionsDetailStats = async ({ serviceId, jobId, transactionId, pageObj }: { serviceId: string; jobId: string; transactionId: string; pageObj: PageObjType;}) => {
  // if (import.meta.env.DEV) {
  //   return GET_TRANSACTIONS_DETAIL_STATS
  // }
  const response = await fetch(`/api/v1/services/${serviceId}/jobs/${jobId}/transactions/${transactionId}/stats?fromDate=2023-01-01&toDate=2024-01-01&pageNo=${pageObj.pageNo}&pageSize=${pageObj.pageSize}`)
  if (!response.ok) {
    throw new Error('데이터를 불러오는데 실패하였습니다.')
  }
  return response.json()
}
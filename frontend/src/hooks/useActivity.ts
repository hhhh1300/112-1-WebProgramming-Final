import {
  createActivityPayload,
  followActivityPayload,
  getActivityByDescriptionPayload,
  getActivityByTagPayload,
  getActivityByTimePayload,
  getActivityNumberPayload,
  getActivityRatingPayload,
  getChatgroupPayload,
  // getFollowedActivityPayload,
  getHostedActivityPayload,
  getJoinedActivityByTagPayload,
  getJoinedActivityPayload,
  getMessagePayload,
  insertMessagePayload,
  joinActivityPayload,
  kickMemberPayload,
  quitActivityPayload,
  rateActivityPayload,
} from '@/lib/shared_types';
import instance from '@/lib/axios';

export default function useActivity() {
  /* TODO: route may change */

  //getAllActivity
  const getAllActivity = async (category: string | null) => {
    const { data } = await instance.get('/activity', {
      params: {
        category,
      },
    });
    return data;
  };

  //createActivity
  const createActivity = async (activity: createActivityPayload) => {
    return instance.post('/activity', activity);
  };

  //getActivityByDescription
  const getActivityByDescription = async ({ description }: getActivityByDescriptionPayload) => {
    return instance.get(`/activity/${description}`);
  };

  //getActivityByTime
  const getActivityByTime = async ({
    event_start_timestamp,
    event_end_timestamp,
  }: getActivityByTimePayload) => {
    return instance.get(`/activity/${event_start_timestamp}/${event_end_timestamp}`);
  };

  //getActivityByTag
  const getActivityByTag = async ({ activity_tag }: getActivityByTagPayload) => {
    return instance.get(`/activity/${activity_tag}`);
  };

  //getJoinedActivityByTag
  const getJoinedActivityByTag = async ({ activity_tag }: getJoinedActivityByTagPayload) => {
    return instance.get(`/activity/${activity_tag}/join`);
  };

  //followActivity
  const followActivity = async ({ activity_id, member_id }: followActivityPayload) => {
    return instance.post('/activity/follow', { activity_id, member_id });
  };

  //joinActivity
  const joinActivity = async ({ activity_id, member_id }: joinActivityPayload) => {
    return instance.post('/activity/join', { activity_id, member_id });
  };

  //quitActivity
  const quitActivity = async ({ activity_id, member_id }: quitActivityPayload) => {
    return instance.delete(`/activity/${activity_id}/${member_id}`);
  };

  //getJoinedActivity
  const getJoinedActivity = async ({ member_id }: getJoinedActivityPayload) => {
    const { data } = await instance.get(`/activity/join/`, {
      params: {
        member_id,
      },
    });
    return data;
  };

  //getFollowedActivity
  const getFollowedActivity = async () => {
    const { data } = await instance.get(`/activity/follow/`);
    return data;
  };

  //getHostedActivity
  const getHostedActivity = async ({ member_id }: getHostedActivityPayload) => {
    return instance.get(`/activity/host/${member_id}`);
  };

  //getChatgroup
  const getChatgroup = async ({ activity_id }: getChatgroupPayload) => {
    return instance.get(`/activity/${activity_id}/chatgroup`);
  };

  //getMessage
  const getMessage = async ({ chatgroup_id }: getMessagePayload) => {
    return instance.get(`/activity/chatgroup/${chatgroup_id}/message`);
  };

  //insertMessage
  const insertMessage = async ({ chatgroup_id, member_id, message_text }: insertMessagePayload) => {
    return instance.post(`/activity/chatgroup/message`, {
      chatgroup_id,
      member_id,
      message_text,
    });
  };

  //rateActivity
  const rateActivity = async ({ activity_id, member_id, score, comment }: rateActivityPayload) => {
    return instance.post(`/activity/rate`, { activity_id, member_id, score, comment });
  };

  //getActivityRating
  const getActivityRating = async ({ activity_id }: getActivityRatingPayload) => {
    return instance.get(`/activity/${activity_id}/rating`);
  };

  //getActivityNumber
  const getActivityNumber = async ({ activity_id }: getActivityNumberPayload) => {
    return instance.get(`/activity/${activity_id}/number`);
  };

  //getActivityMember
  const getActivityMember = async ({ activity_id }: getActivityNumberPayload) => {
    return instance.get(`/activity/${activity_id}/member`);
  };

  //kickMember
  const kickMember = async ({ activity_id, member_id }: kickMemberPayload) => {
    return instance.delete(`/activity/${activity_id}/${member_id}`);
  };

  //findActivityNeedAttention
  const findActivityNeedAttention = async () => {
    return instance.get(`/activity/attention`);
  };

  //getAllMember
  const getAllMember = async () => {
    return instance.get(`/activity/member`);
  };

  return {
    createActivity,
    getActivityByDescription,
    getActivityByTime,
    getActivityByTag,
    getJoinedActivityByTag,
    followActivity,
    joinActivity,
    quitActivity,
    getJoinedActivity,
    getFollowedActivity,
    getHostedActivity,
    getChatgroup,
    getMessage,
    insertMessage,
    rateActivity,
    getActivityRating,
    getActivityNumber,
    getActivityMember,
    kickMember,
    findActivityNeedAttention,
    getAllActivity,
    getAllMember,
  };
}

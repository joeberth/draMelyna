export function updateProfileRequest(data) {
    return {
      type: '@user/UPDATE_PROFILE_REQUEST',
      payload: { data },
    };
  }
  
  export function updateProfileSuccess(profile) {
    return {
      type: '@user/UPDATE_PROFILE_SUCCESS',
      payload: { profile },
    };
  }
  
  export function updateProfileFailure() {
    return {
      type: '@user/UPDATE_PROFILE_REQUEST',
    };
  }

  export function deletePatient(id) {
    return {
      type: '@user/DELETE_PATIENT_REQUEST',
      payload: { id },
    };
  }
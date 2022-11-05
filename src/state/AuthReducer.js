export const initialState = {
    user: null
}

export function AuthReducer(state, action) {
    const { type, payload } = action;

    switch (type) {
        case "SIGN_IN":
            console.log("SIGN_IN");

            return {
                user: payload.user
            };

        case "SIGN_OUT":
            console.log("SIGN_OUT");

            return {
                user: null
            };

    }
}
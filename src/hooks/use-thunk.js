import { useCallback, useState } from "react"
import { useDispatch } from "react-redux";

const useThunkOperator = (thunk) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const dispatch = useDispatch();

    const runThunk = useCallback(() => {
        dispatch(thunk())
            .unwrap()
            .catch(err => setError(err))
            .finally(() => setIsLoading(false));
    }, [dispatch, thunk]);

    return [runThunk, isLoading, error];
}

export default useThunkOperator;
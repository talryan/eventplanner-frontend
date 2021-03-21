import { format} from 'date-fns'

const DisplayTime = (time) => {
    return format(new Date(`${time}`),'K:m a')
}

export default DisplayTime
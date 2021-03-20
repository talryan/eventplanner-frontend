import { format} from 'date-fns'

const DisplayDate = (date) => {
    return format(new Date(`${date}`),'MM/dd/yyyy')
}

export default DisplayDate
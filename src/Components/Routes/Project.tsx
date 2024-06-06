
import { useParams } from "react-router-dom"

function Project() {
    const params = useParams<{projectId: string}>()
    return (
        <div>Project {params.projectId}</div>
    )
}

export default Project
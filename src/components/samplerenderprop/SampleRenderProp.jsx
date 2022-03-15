import React from 'react'

export const SampleRenderProp = ({ data, renderItem, }) => {

    return (
        <>
            <div>My List</div>
            {data?.map((item, index) => renderItem({ item, index }))}

        </>
    )
}

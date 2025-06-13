import React from 'react'

const renderNode = (node, index) => {
  const { type, children, text, style, tag } = node

  // Handle different node types
  switch (type) {
    case 'text':
      return <>{text}</>

    case 'linebreak':
      return <br key={index} />

    case 'paragraph':
      return (
        <p key={index} style={{ textAlign: node.direction === 'ltr' ? 'left' : 'right' }}>
          {children && children.map((child, idx) => renderNode(child, idx))}
        </p>
      )

    case 'heading':
      // Use tag to determine heading level
      const HeadingTag = tag || 'h2'
      return (
        <HeadingTag key={index}>
          {children && children.map((child, idx) => renderNode(child, idx))}
        </HeadingTag>
      )

    case 'link':
      // For 'link' type, check linkType
      const url = node.fields?.url || '#'
      return (
        <a
          key={index}
          href={url}
          target={node.fields?.newTab ? '_blank' : '_self'}
          rel="noopener noreferrer"
          style={style ? { fontStyle: style } : {}}
        >
          {children && children.map((child, idx) => renderNode(child, idx))}
        </a>
      )

    case 'autolink':
      const autolinkUrl = node.fields?.url || '#'
      return (
        <a
          key={index}
          href={autolinkUrl}
          target={node.fields?.newTab ? '_blank' : '_self'}
          rel="noopener noreferrer"
          style={style ? { fontStyle: style } : {}}
        >
          {children && children.map((child, idx) => renderNode(child, idx))}
        </a>
      )

    case 'heading':
      const HeadingLevel = tag || 'h2'
      return (
        <HeadingLevel key={index}>
          {children && children.map((child, idx) => renderNode(child, idx))}
        </HeadingLevel>
      )

    default:
      // For unknown types, fallback to rendering children
      return (
        <div key={index}>{children && children.map((child, idx) => renderNode(child, idx))}</div>
      )
  }
}

const page = async () => {
  let DatenschutzerklarungData

  try {
    const res = await fetch(
      `${process.env.NEXT_BASE_URL}/my-route?type=global&slug=datenschutzerklarung`,
    )
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.status}`)
    }

    DatenschutzerklarungData = await res.json()
  } catch (error) {
    console.error('Error loading Impressum page data:', error)
    return <div>Error loading data.</div>
  }


  return (
    <section className="Im-section section">
      <div className="py-10 md:py-[70px] lg:py-[100px] bg-Teal">
        <div className="container mx-auto px-[15px]">
          <h1 className="text-white">{DatenschutzerklarungData?.title}</h1>
        </div>
      </div>
      <div className="container mx-auto px-[15px]">
        <div className="py-10 md:py-[70px] text-a space-y-4 content">
          {/* Render the content */}
          {renderNode(DatenschutzerklarungData?.content.root)}
        </div>
      </div>
    </section>
  )
}

export default page

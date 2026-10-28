package com.training.project.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

@Model(
        adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class Slide {

    @Inject
    private String image;

    @Inject
    private String category;

    @Inject
    private String heading;

    @Inject
    private String description;

    @Inject
    private String author;

    @Inject
    private String readTime;

    @Inject
    private String buttonText;

    @Inject
    private String buttonLink;

    public String getImage() {
        return image;
    }

    public String getCategory() {
        return category;
    }

    public String getHeading() {
        return heading;
    }

    public String getDescription() {
        return description;
    }

    public String getAuthor() {
        return author;
    }

    public String getReadTime() {
        return readTime;
    }

    public String getButtonText() {
        return buttonText;
    }

    public String getButtonLink() {
        return buttonLink;
    }
}
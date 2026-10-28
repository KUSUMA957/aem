package com.training.project.core.models;

import javax.inject.Inject;

import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Model;

@Model(
        adaptables = Resource.class,
        defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL
)
public class Section {

    @Inject
    private String title;

    @Inject
    private String sectionId;

    @Inject
    private String content;

    public String getTitle() {
        return title;
    }

    public String getSectionId() {
        return sectionId;
    }

    public String getContent() {
        return content;
    }
}